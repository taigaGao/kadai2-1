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
        let numList = [];
        const input_fizz = Number(document.getElementById('fizz').value);
        const input_buzz = Number(document.getElementById('buzz').value);
        if (input_fizz === 0) {
            errMessage();
            return;
        } else if (input_buzz === 0) {
            errMessage();
            return;
        }
        if (Number.isInteger(input_fizz) && Number.isInteger(input_buzz)) {
            for (let i = 1; i < 100; i++) {
                const fizzNum = input_fizz * i;
                numList.push(fizzNum);
                const buzzNum = input_buzz * i;
                numList.push(buzzNum);
            };
            numList.sort(
                function (a, b) {
                    return (a < b ? -1 : 1);
                }
            );
            numList = numList.filter(function (x, i, self) {
                return self.indexOf(x) === i;
            });
            for (let i = 0; numList[i] < 100; i++) {
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
    };
}