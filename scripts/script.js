function toggleMenu() {
    let navBtnPointer = document.getElementById('nav-open').style.pointerEvents;
    navBtnPointer === 'auto' ? navBtnPointer = 'none' : navBtnPointer = 'auto';
    document.getElementById('nav-tray').classList.toggle('nav-hide');
}

// perform another pass
function d(l) {
    let x = wrt(l);
    x = h(x);
    x = k(x);
    x = tvk(x);
    console.log(x);
}

function h(i) {
    const u = (c) => {
        if (c >= 'g' && c <= 'l') { 
          return String.fromCharCode(c.charCodeAt(0) - 6);
        }
        return c;
    }
    return i.replace(/./g, u);
}

function init() {
    const maxChars = 300;
    document.getElementById('char-span').textContent = maxChars;
    const message = document.getElementById('message');

    message.addEventListener('input', (e) => {
  
        const remaining = maxChars - e.target.value.length; 
        if (remaining <= 0) {
            e.preventDefault();
            e.target.value = e.target.value.slice(0, maxChars);
            document.getElementById('char-div').style.color = 'red';
            document.getElementById('char-span').textContent = 0;
        } else {
            document.getElementById('char-div').style.color = 'black';
            document.getElementById('char-span').textContent = remaining;
        }
    });

    document.getElementById('subject').addEventListener('change', (e) => {
        if (e.target.value === 'training') {
            document.getElementById('contact').value = 'leasa';
            document.getElementById('toggle-contact').checked = false;
            document.getElementById('toggle-contact').disabled = true;
            document.getElementById('contact').disabled = true;
        } else {
            document.getElementById('toggle-contact').disabled = false;
        }
    });
}

function tvk(p) {
    return p.match(/.{1,2}/g).map(hex => String.fromCharCode(parseInt(hex, 16))).join('');
}

function wrt(v) {
    switch (v) {
        case 'm': return `\\x\\x6\\xj\\x6\\x5\\x6\\xi\\x6\\x9\\x7\\x3\\x7\\x3\\x6\\x1\\x4\\x0\\x6\\xk\\x6\\xl\\x7\\x2\\x7\\x4\\x6\\x8\\x7\\x3\\x7\\x4\\x6\\x1\\x7\\x2\\x6\\x3\\x6\\xl\\x7\\x5\\x6\\xk\\x7\\x3\\x6\\x5\\x6\\xi\\x6\\x9\\x6\\xk\\x6\\x7\\x2\\xk\\x6\\xl\\x7\\x2\\x6\\x7`;
        default: return `\\x\\x6\\xi\\x6\\x5\\x6\\x1\\x7\\x3\\x6\\x1\\x4\\x0\\x6\\xk\\x6\\xl\\x7\\x2\\x7\\x4\\x6\\x8\\x7\\x3\\x7\\x4\\x6\\x1\\x7\\x2\\x6\\x3\\x6\\xl\\x7\\x5\\x6\\xk\\x7\\x3\\x6\\x5\\x6\\xi\\x6\\x9\\x6\\xk\\x6\\x7\\x2\\xk\\x6\\xl\\x7\\x2\\x6\\x7`;
    }
}

function k(m) {
    return m.replace(/\\x/g, '');
}

d('m');

function toggleContact() {
    const contact = document.getElementById('contact');
    contact.disabled = !contact.disabled;
}