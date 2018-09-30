class Product {
  constructor(selected, father, disabled, classList) {
    this.isSelected = selected;
    this.isDisabled = disabled;
    this.fatherElement = father;
    this.classList = father.classList;
    this.annotation = father.nextElementSibling;
  }

  changeProductCondition(e, isSelected, clickEvent) {
    this.isSelected = isSelected;

    if (this.isSelected) {
      return clickEvent === 'click'
        ? this.fatherElement.addEventListener('mouseleave', this.makeSelected)
        : this.makeSelected(e);
    }

    if (!this.isSelected) {
      this.classList.remove('product--selected');

      this.annotation.firstElementChild.textContent =
        'Чего сидишь? Порадуй котэ,';

      this.fatherElement.removeEventListener('mouseleave', this.makeSelected);
    }
  }

  changeLinkCondition(e) {
    e.preventDefault();

    this.makeSelected(e);
  }

  makeSelected(e) {
    e.preventDefault();
    if (e.target.classList.contains('product__link')) {
      e.target.previousElementSibling.textContent =
        e.target.parentElement.dataset.text;
      this.classList.add('product--selected');
      return;
    }

    e.currentTarget.nextElementSibling.firstElementChild.textContent =
      e.currentTarget.nextElementSibling.dataset.text;
    this.classList.add('product--selected');
  }

  makeDisabled(isDisabled) {
    this.isDisabled = isDisabled;

    if (this.isDisabled) {
      const ingredient = this.fatherElement.children[2].textContent;

      this.annotation.firstElementChild.textContent = `Печалька, ${ingredient} закончился.`;
    }
  }
}

(function() {
  const clickEvent = document.ontouchstart !== null ? 'click' : 'touchstart';
  let products = [];
  console.log(clickEvent);

  document.querySelectorAll('.product__wrapper').forEach(product => {
    products.push(
      new Product(
        false,
        product,
        product.classList.contains('product--disabled')
      )
    );

    product.addEventListener(clickEvent, onProductClickHandler);
  });

  document
    .querySelectorAll('.product__link')
    .forEach(link => link.addEventListener('click', onLinkClickHandler));

  function onProductClickHandler(e) {
    products.forEach(product => {
      if (e.currentTarget === product.fatherElement && !product.isDisabled) {
        e.currentTarget.classList.contains('product--selected')
          ? product.changeProductCondition(e, false)
          : product.changeProductCondition(e, true, clickEvent);
      }
    });
  }

  function onLinkClickHandler(e) {
    products.forEach(product => {
      if (
        e.target.classList.contains('product__link') &&
        e.target.parentElement.previousElementSibling === product.fatherElement
      ) {
        product.changeLinkCondition(e);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    products.forEach(product => {
      if (product.classList.contains('product--disabled')) {
        product.makeDisabled(true);
      }
    });
  });
})();
