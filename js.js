function areaOfVisibility() {
  const body = document.querySelector('body');
  const page = document.querySelector('.page');
  const h2 = document.getElementsByTagName("h2")[0];
  const footer = document.querySelector('footer'); 
  let h2Footer = document.querySelector('footer h2');
  
  //hover effect on border page
  body.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('avatar')) {
      page.style.borderColor = 'red';
    }
  });

  body.addEventListener('mouseout', (e) => {
    if(e.target.classList.contains('avatar')) {
      page.style.borderColor = 'midnightblue';
    }
  });
  
  // move text by mousemove
  h2.addEventListener("mousemove", (x)=>{
    let h2MouseX = x.offsetX;
    h2.style.marginLeft = `${h2MouseX/2}` + "px";
    h2.style.letterSpacing = `${((h2MouseX+500)/500)-0.75}` + "em";
    h2.style.cursor = 'pointer'
  });
  
    //increase body height
  body.style.setProperty('height', `${body.scrollHeight + footer.offsetHeight}px`);


  // change text by clicking on footer
  footer.addEventListener('click',()=>{
    let h2FooterLowerCase = h2Footer.innerText.toLowerCase();
    if(h2FooterLowerCase !== 'bye!!'){
      h2Footer.innerText = 'Bye!!';
    } else{
      h2Footer.innerHTML = 'Thank you <br> for your <br> interest in <br> my resume:D';
    }
  });
}

areaOfVisibility();
