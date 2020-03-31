import itemDetails from './itemDetails';

const fakeData = [...itemDetails];

const shuffle = u => {
    for (let i = u.length; i; i--){
        let j = Math.floor(Math.random() * i);
        [u[i-1], u[j]] = [u[j], u[i - 1]];
    
    }

}
shuffle(fakeData);
export default fakeData;