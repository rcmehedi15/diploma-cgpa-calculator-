
// submit button click
document.querySelector('#btn_submit').addEventListener('click' , () => {

    // first input value catch
    let firstGpa = document.querySelector('#first-gpa').value;
    // 1st input value calculation 
    let perFirstGpa = (firstGpa / 100) * 5 ;
    let perFirstGpaResult = perFirstGpa.toPrecision(3);

    // 2nd input value catch
    let secondGpa = document.querySelector('#two-gpa').value;
    // 2nd input value calculation 
    let perSecondGpa = (secondGpa / 100) * 5 ;
    let perSecondGpaResult = perSecondGpa.toPrecision(3);

     // 3rd input value catch
     let thirdGpa = document.querySelector('#three-gpa').value;
     // 3rd input value calculation 
     let perThirdGpa = (thirdGpa / 100) * 5 ;
     let perThirdGpaResult = perThirdGpa.toPrecision(3);

     // 4th input value catch
     let fourGpa = document.querySelector('#four-gpa').value;
     // 4th input value calculation 
     let perFourGpa = (fourGpa / 100) * 10 ;
     let perFourGpaResult = perFourGpa.toPrecision(3);

      // 5th input value catch
      let fiveGpa = document.querySelector('#five-gpa').value;
      // 5th input value calculation 
      let perFiveGpa = (fiveGpa / 100) * 15 ;
      let perFiveGpaResult = perFiveGpa.toPrecision(3);
      
       // 6th input value catch
      let sixGpa = document.querySelector('#six-gpa').value;
      // 6th input value calculation 
      let perSixGpa = (sixGpa / 100) * 20 ;
      let perSixGpaResult = perSixGpa.toPrecision(3);

       // 7th input value catch
       let sevenGpa = document.querySelector('#seven-gpa').value;
       // 7th input value calculation 
       let perSevenGpa = (sevenGpa / 100) * 25 ;
       let perSevenGpaResult = perSevenGpa.toPrecision(3);

       // 8th input value catch
       let eightGpa = document.querySelector('#eight-gpa').value;
       // 8th input value calculation 
       let perEightGpa = (eightGpa / 100) * 15 ;
       let perEightGpaResult = perEightGpa.toPrecision(3);

    //    total result 
    let total = parseFloat(perFirstGpaResult) + parseFloat(perSecondGpaResult) + parseFloat(perThirdGpaResult) +parseFloat(perFourGpaResult) +  parseFloat(perFiveGpaResult) + parseFloat(perSixGpaResult) + parseFloat(perSevenGpaResult) + parseFloat(perEightGpaResult); 
    let totalGpa =  total.toPrecision(3);
    document.querySelector('.cgpa-output h1').innerHTML = `TOTAL CGPA = ${totalGpa}`

})
// reset button 
document.querySelector('#btn_reset').addEventListener('click', () => {
    document.querySelector('.cgpa-output h1').innerHTML = `TOTAL CGPA =`
    document.querySelector('#first-gpa').value = ' ';
    document.querySelector('#two-gpa').value = ' ';
    document.querySelector('#three-gpa').value = ' ';
    document.querySelector('#four-gpa').value = ' ';
    document.querySelector('#five-gpa').value = ' ';
    document.querySelector('#six-gpa').value = ' ';
    document.querySelector('#seven-gpa').value = ' ';
    document.querySelector('#eight-gpa').value = ' ';

})