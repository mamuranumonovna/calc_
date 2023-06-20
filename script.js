const btns = document.querySelectorAll('button')
const freespace = document.querySelector('#freespace')
let array = Array.from(btns);
array.map((item) => {
    item.addEventListener('click', e => {
        let btn = e.target.textContent
        switch (btn) {
            case "x":
                return freespace.textContent = freespace.textContent.slice(0, -1);
                break;
            case "C":
                return freespace.textContent = "";
                break;
            case "=":
                try {
                    return freespace.textContent = eval(freespace.textContent)
                } catch (err) {
                    freespace.textContent = err.message;
                }



            default:
                freespace.textContent += btn

        }
    })
})