const cookieStorage = {
    getItem:(key) => {
        const cookies = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((acc,[key,value])=> ({ ...acc, [key.trim()]:value}), {});
        return cookies[key];
    },
    setItem:(key, value) => {
        document.cookie = `${key}=${value}`;
    }
}

const StorageType = cookieStorage;
const consentPropertyName = 'cookies_consent';

const shouldShowPopup =  ()=> !StorageType.getItem(consentPropertyName);
const SaveToStorage = ()=>StorageType.setItem(consentPropertyName, true);

window.onload =() =>{
    const consentPopup = document.getElementById('consent-popup');
    const acceptBtn = document.getElementById('accept');

    const acceptFn = event=>{
        SaveToStorage(StorageType);
        consentPopup.classList.add('hidden');
    };

    acceptBtn.addEventListener('click', acceptFn);




    if (shouldShowPopup()){
        consentPopup.classList.remove('hidden');

        const consent = confirm('Agree to the terms and conditions of the site?');
        if (consent){
            SaveToStorage();
        }
    }
};