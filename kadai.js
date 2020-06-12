window.onload = function () {
    const textArea = document.getElementById('textarea');
    const errMessage = () => {
        const p = document.createElement('p');
        p.textContent = '整数値を入力してください';
        textArea.appendChild(p);
    }
    const writeTest = (t) => {
        const p = document.createElement('p');
        p.textContent = t;
        textArea.appendChild(p);
    }
    document.getElementById("btn").onclick = () => {
        while (textArea.firstChild) {
            textArea.removeChild(textArea.firstChild );
        };
        const input_fizz = Number(document.getElementById('fizz').value);
        const input_buzz = Number(document.getElementById('buzz').value);
        if (input_fizz === 0) {
            errMessage();
            return;
        } else if (input_buzz === 0) {
            errMessage();
            return;
        };
        if (Number.isInteger(input_fizz) && Number.isInteger(input_buzz)) {
            for (let i = 1; i < 100; i++) {
                if (i % input_fizz === 0 && i % input_buzz === 0) {
                    let text = "FizzBuzz " + i;
                    writeTest(text);
                } else if ( i % input_fizz === 0) {
                    let text = "Fizz " + i;
                    writeTest(text);
                } else if ( i % input_buzz === 0) {
                    let text = "Buzz " + i;
                    writeTest(text);
                };
            };
        } else {
            errMessage();
        };
    };
}