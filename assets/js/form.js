document.addEventListener('DOMContentLoaded', function () {

    const dialog = document.getElementById("dialog");


    const showButton = document.getElementById('contactMeBtn');


    const closeButton = document.getElementById("close_button");



    showButton.addEventListener("click", () => {

    dialog.showModal();

    });


    closeButton.addEventListener("click", () => {

    dialog.close();

    });

    const btnSend = document.getElementById('btn-send');
    const form= document.getElementById('form')

    btnSend.addEventListener('click', function(e){
        e.preventDefault();

        const serviceID = 'service_5s64ffd';
        const templateID = 'template_xmndof4';
    
        emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
        window.alert('Sent!');
        form.reset();
        dialog.close();
        })
        .catch((error)=>{
            btn.value = 'Send Email';
            alert(JSON.stringify(error));
        })
    
    })
})
