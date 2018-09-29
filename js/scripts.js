class Product {
  constructor(selected, father, disabled, classList) {
    this.isSelected = selected;
    this.isDisabled = disabled;
    this.fatherElement = father;
    this.classList = father.classList;
    this.annotation = father.nextElementSibling;
  }

  changeProductCondition(e, isSelected) {
    this.isSelected = isSelected;

    if (this.isSelected) {
      return e.sourceCapabilities.firesTouchEvents ? this.makeSelected(e) : this.fatherElement.addEventListener('mouseleave', this.makeSelected);
    }

    if (!this.isSelected) {
      this.classList.remove('product--selected');

      this.annotation.firstElementChild.textContent = 'Чего сидишь? Порадуй котэ,';

      this.fatherElement.removeEventListener('mouseleave', this.makeSelected);
    }
  }

  changeLinkCondition(e) {
    e.preventDefault();

    this.makeSelected(e)
  }

  makeSelected(e) {
    if (e.target.classList.contains('product__link')) {
      e.target.previousElementSibling.textContent = e.target.parentElement.dataset.text;
      this.classList.add('product--selected');
      return;
    }

    e.currentTarget.nextElementSibling.firstElementChild.textContent = e.currentTarget.nextElementSibling.dataset.text;
    this.classList.add('product--selected');
  }

  makeDisabled(isDisabled) {
    this.isDisabled = isDisabled;

    if (this.isDisabled) {
      const ingredient = this.fatherElement.children[2].textContent;

      this.annotation.firstElementChild.textContent = `Печалька, ${ingredient} закончился.`
    }
  }
}


(function () {

  let products = [];

  document.querySelectorAll('.product__wrapper').forEach(product => {
    products.push(new Product(false, product, product.classList.contains('product--disabled')));

    product.addEventListener('click', onProductClickHandler);
  });

  document.querySelectorAll('.product__link').forEach(link => link.addEventListener('click', onLinkClickHandler));

  function onProductClickHandler(e) {
    products.forEach(product => {
      if (e.currentTarget === product.fatherElement && !product.isDisabled) {
        e.currentTarget.classList.contains('product--selected') ? product.changeProductCondition(e, false) : product.changeProductCondition(e, true);
      }
    })
  }

  function onLinkClickHandler(e) {
    products.forEach(product => {
      if (e.target.classList.contains('product__link') && e.target.parentElement.previousElementSibling === product.fatherElement) {
        product.changeLinkCondition(e)
      }
    })
  }

  document.addEventListener('DOMContentLoaded', () => {
    products.forEach(product => {
      if (product.classList.contains('product--disabled')) {
        product.makeDisabled(true);
      }
    })
  })

})();

