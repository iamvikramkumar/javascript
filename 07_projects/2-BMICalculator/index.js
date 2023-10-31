const form = document.querySelector('form');

// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)
//stop (submit) defualt action of form

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === ' ' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);

    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
     if(bmi==18.6 || bmi < 18.6){
       results.innerHTML=`Your Bmi is:${bmi}\n you are underweight`;
    }
    else if(bmi>18.6 && bmi<24.9){
      results.innerHTML=`Your BMI is:${bmi}\n which is in normal range, so don't you worry`
    }
    else{
      results.innerHTML=`Your Bmi is:${bmi}\n oh-oh you are overweight`
    }
  }
    
});
