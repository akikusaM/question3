function emailValidation() {
  const form = document.getElementById('form');
  form.addEventListener('submit', function(e)
  {

		const email = form.email.value;// お名前欄の内容を取得してname変数に格納する処理
		const emailconfirm = form.email_confirm.value;// お名前欄の内容を取得してname変数に格納する処理
	    if(email != emailconfirm)
	    {
//			e.preventDefault();
			
			const element = document.createElement("p");
			element.innerText = "Eメールが一致しません";
			const parentElement = document.getElementsByTagName("section")[0];
      		form.appendChild(element);

  			element.classList.add("alert");

		      setTimeout(function() {
		        form.removeChild(element);
		      }, 3000);		
		      
			return false;
		}
	 });
};

window.onload = emailValidation;