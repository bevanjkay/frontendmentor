const buttons = Array.from(document.querySelectorAll('a.btn' || '.close-btn'));
const pledgeModal = document.querySelector('#pledge-modal');
let closeBtn;

buttons.forEach(button => {
    button.addEventListener('click', runButtonAction);
})

function runButtonAction(e) {

    console.log('button clicked');

    const action = e.target.dataset.action;

    switch (true) {
        case action === 'openPledgeModal':
            openPledgeModal();
            break;
    }

}

function openPledgeModal() {
    pledgeModal.classList.add('show');
    setTimeout(() => {
        pledgeModal.classList.add('visible')
    }, 1);
}

function closeModals() {
    setTimeout(() => {
        pledgeModal.classList.remove('show')
    }, 400);
    pledgeModal.classList.remove('visible');
}