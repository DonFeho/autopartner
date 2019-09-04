const ui = new UI('data/main.json', 'data/contacts.json');
ui.renderForm();

ui.renderAp();
ui.renderShop();
ui.renderBullets();
ui.renderContacts();


document.getElementById('navbarJS').addEventListener('click', menuOptions);

function menuOptions(e) {



  
  e.preventDefault();
  const el = e.toElement;
  const eventSelector = e.toElement.id;

  const apSel = document.getElementById('ap-selector');
  const shopSel = document.getElementById('shop-selector');
  const mapSel = document.getElementById('map-selector');
  const Menu = new Array(apSel, shopSel, mapSel);

  const tForm = document.getElementById('tForm');
  const ap = document.getElementById('ap');
  const tMap = document.getElementById('tMap');
  const tShop = document.getElementById('tShop');
  const Layout = new Array(tForm, ap, tMap, tShop);

  if (eventSelector === 'ap-selector' || eventSelector === 'shop-selector' || eventSelector === 'map-selector' || eventSelector === 'main-selector') {
    Menu.forEach(function (m) {
      m.classList.remove('text-gold');
    });
    el.classList.add('text-gold');
    Layout.forEach(function (element) {
      element.classList.remove('show');

    });
  };
};

//lightbox
$(document).on('click', '[data-toggle="lightbox"]', function (e) {
  e.preventDefault();
  $(this).ekkoLightbox();
});












