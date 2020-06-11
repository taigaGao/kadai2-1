window.onload = function () {
    const textArea = document.getElementById('textarea');
    const errMessage = () => {
        var p = document.createElement('p');
        p.textContent = '整数値を入力してください';
        textArea.appendChild(p);
    }
    const writeTest = (t) => {
        var p = document.createElement('p');
        p.textContent = t;
        textArea.appendChild(p);
    }
    document.getElementById("btn").onclick = () => {
        while (textArea.firstChild) {
            textArea.removeChild(textArea.firstChild );
        }
        const numList = [];
        const inputF = document.getElementById('fizz').value;
        const input_fizz = Number(inputF);
        const inputB = document.getElementById('buzz').value;
        const input_buzz = Number(inputB);
        if (input_fizz === 0) {
            errMessage();
        } else if (input_buzz === 0) {
            errMessage();
        } else {
            if (Number.isInteger(input_fizz) && Number.isInteger(input_buzz)) {
                for (let i = 1; i < 100; i++) {
                    const fizzNum = input_fizz * i;
                    if (fizzNum < 100) {
                        if (numList.includes(fizzNum)) {
                        } else {
                            numList.push(fizzNum);
                        }
                    }
                    const buzzNum = input_buzz * i;
                    if (buzzNum < 100) {
                        if (numList.includes(buzzNum)) {
                        } else {
                            numList.push(buzzNum);
                        }
                    }
                };
                numList.sort(
                    function (a, b) {
                        return (a < b ? -1 : 1);
                    }
                );
                console.log(numList);
                for (let i = 0; i < numList.length; i++) {
                    if (numList[i] % input_fizz  === 0 && numList[i] % input_buzz === 0 ) {
                        let text = "FizzBuzz " + numList[i];
                        writeTest(text);
                    } else if(numList[i] % input_fizz === 0){
                        let text = "Fizz " + numList[i];
                        writeTest(text);
                    } else if(numList[i] % input_buzz === 0){
                        let text = "Buzz " + numList[i];
                        writeTest(text);
                    };
                }
            } else {
                errMessage();
            }
        }
    };
}