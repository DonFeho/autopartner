class UI {
  constructor(bullets, contacts) {
    this.bullets = bullets;
    this.contacts = contacts;
  }
  async fetchAndRender() {
    const response = await fetch(this.contacts);
    return await response.json();
  }

  renderForm() {
    const apForm = `
      <div class="offset-lg-1 col-md-10 col-sm-12 col-lg-6 col-xl-5 text-center my-auto">
        <div class="form-overlay py-4 px-5">
          <div class="py-4">
            <h4 class="">Потрібні Запчастини? </h4>
            </div>
          <form action="https://formspree.io/yourautopartner@gmail.com" method="POST">
            <small class=""> Вкажіть контактні дані:</small>
            <div class="form-group">
              <input id="inputName" name="name" type="name" class="form-control" placeholder=" Ім'я">
            </div>
            <div class="form-group">
              <input id="inputPhone" name="phone" type="phone" class="form-control" id="" placeholder="Контактний телефон">
            </div>
            <small class=""> Вкажіть код запчастини:</small>
            <div class="form-group">
              <textarea name="textarea" rows="2" class="form-control" ></textarea>
            </div>
            <small class=""> та надішліть нам запит. </small>
            <div class="form-group py-3">
              <input type="submit" value="Надіслати" class="btn btn-block btn-shop mt-3"></input>
            </div>
          </form>
        </div>
      </div>
    `;
    const aboutTarget = document.getElementById('form-row');
    aboutTarget.innerHTML = apForm;

  }

  renderAp() {
    const apAbout = `
      <div class="col-md-7">
        <h2 class="text-logo"> Автопартнер </h2>
        <hr>
        <p class="bullet-p text-white"> Cучасна мережа магазинів автозапчастин та молода амбітна команда спеціалістів у питаннях їх пошуку та продажу.
          <br>  
          Ця справа для нас не просто торгівля, ми намагаємося бути у
          ній кращими і пропонуємо належний рівень сервісу, приємні ціни та адекватні терміни доставки.
          <br>
          Ми щиро раді бути Вашим надійним та комфортним Автопартнером! 
        </p>
        <br>
        <h4 class="text-logo mb-0">
          Наша Місія
        </h4>
        <p class="bullet-p text-white">
          Влучно та швидко забезпечувати потреби наших клієнтів у якісних автозапчастинах. 
                   
        </p>
      </div>
      <div class="col-md-5">
        <div class="text-center">
          <img src="/a-img/team/orest.jpg" alt="" class="w-75 img-fluid rounded-circle orest">
        </div>
      </div>
    `;
    const aboutTarget = document.getElementById('ap-about');
    aboutTarget.innerHTML = apAbout;

  }
  renderShop() {
    const apShop = `
      
      <div class="row text-md-right text-center">
        <div class="col-md-5 mx-auto">        
          <a href="/a-img/shop/big/shop.jpg" data-toggle="lightbox">
            <img src="/a-img/shop/shop.jpg" alt="" class="img-fluid img-shop">
          </a> 
        </div>  
        <div class="col-md-7 my-auto px-lg-5"> 
          <p class="bullet-p text-md-left"> Ви можете здійснювати пошук серед усіх товарів, що є в наявності на нашому складі, а також серед найрізноманітніших пропозицій під замовлення. </p>
        </div> 
      </div>
      <div class="row text-md-left text-center">
        <div class="col-md-7 my-auto"> 
          <p class="bullet-p text-md-right"> У нашому інтернет-магазині також розміщенні пропозиції наших постійних партнерів, що дозволяє забезпечити велику кількість пропозицій із різними цінами та термінами доставки.  </p>
        </div>     
        <div class="col-md-5 mx-auto  px-lg-5">        
          <a href="/a-img/shop/big/shop2.jpg" data-toggle="lightbox">
            <img src="/a-img/shop/shop2.jpg" alt="" class="img-fluid img-shop">
          </a> 
        </div>        
      </div> 
      <div class="row mt-4 text-md-right text-center">       
        <div class="col-md-5 mx-auto">        
          <a href="/a-img/shop/big/shop5.jpg" data-toggle="lightbox">
            <img src="/a-img/shop/shop5.jpg" alt="" class="img-fluid img-shop">
          </a> 
        </div>
        <div class="col-md-7 my-auto text-center  px-lg-5"> 
          <p class="bullet-p text-md-left"> Обрані Вами запчастини потрапляють у кошик і тут Ви можете визначити необхідну кількість запчастин та остаточно сформувати замовлення. </p>
        </div>         
      </div>        
      <div class="row text-md-left text-center">
        <div class="col-md-7 my-auto"> 
          <p class="bullet-p text-md-right"> Після здійснення замовлення Вам зателефонує наш менеджер та узгодить деталі. Ви також маєте можливість обрати варіант доставки.   </p>
        </div>
        <div class="col-md-5 mx-auto">        
          <a href="/a-img/shop/big/shop4.jpg" data-toggle="lightbox">
            <img src="/a-img/shop/shop4.jpg" alt="" class="img-fluid img-shop">
          </a> 
        </div>        
      </div>
      <div class="row mt-4 text-md-right text-center">       
        <div class="col-md-5 mx-auto">        
          <a href="/a-img/shop/big/shop3.jpg" data-toggle="lightbox">
            <img src="/a-img/shop/shop3.jpg" alt="" class="img-fluid img-shop">
          </a> 
        </div>
        <div class="col-md-7 my-auto text-center px-lg-5"> 
          <p class="bullet-p text-md-left"> Для здійснення замовлень, Вам необхідно зареєструвати особистий кабінет. У ньому ви зможете слідкувати за виконанням замовлення та переглядати історію усіх Ваших покупок. </p>
        </div>         
      </div>
    `;
    const shopTarget = document.getElementById('ap-shop');
    shopTarget.innerHTML = apShop;
  }

  
  renderContacts() {
    this.fetchAndRender().then(contacts => {
      let output = '';
      contacts.forEach(unit => {
        const phones = unit.phones;
        let phonesOutput = '';
        phones.map((s) => {
          phonesOutput += `
            <li class="list-item">
              <a href="callto:+380964262599">
                <p> <i class="fas fa-phone pr-2"> </i> ${s}</p>
              </a>  
            </li>
          `;
        })
        output += `
          <div class="col-md-4 text-center mb-4">
            <h5 class="mb-0 text-logo">${unit.name}</h5>
            <ul class="list-group list-unstyled">
              <li class="list-item">
                <small> ${unit.street} </small>
              </li>
              ${phonesOutput} 
            </ul>
          </div>  
        `;
      })
      document.getElementById('row-contacts').innerHTML = output;

    });
  }

  renderBullets() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${this.bullets}`, true);
    xhr.onload = function () {
      if (this.status === 200) {
        const bull = JSON.parse(this.responseText);
        let output = '';
        bull.forEach(function (bullet) {
          output += `            
            <div class="col-sm-12 col-md-4 text-center">
              <div class="card mb-2">
                <div class="card-body card-bg">
                  <img src=${bullet.imglink} alt="">
                  <h5 class="mt-2 bullet-h">${bullet.name}</h5>    
                  <p class="bullet-p">${bullet.bull} </p>
                </div>                
              </div>
            </div>                
          `;
        });
        document.getElementById('bullets').innerHTML = output;
      }
    }
    xhr.send();
  }




}
