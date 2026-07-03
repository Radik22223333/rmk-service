// Мобильное меню
const mobileNav = document.getElementById('mobileNav');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn i');

function toggleMobileMenu() {
    mobileNav.classList.toggle('active');
    
    // Меняем иконку гамбургера на крестик
    if (mobileNav.classList.contains('active')) {
        mobileMenuBtn.classList.remove('fa-bars');
        mobileMenuBtn.classList.add('fa-xmark');
    } else {
        mobileMenuBtn.classList.remove('fa-xmark');
        mobileMenuBtn.classList.add('fa-bars');
    }
}

// Модальное окно записи
const modal = document.getElementById('bookingModal');

function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы под окном
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Возвращаем прокрутку
}

// Закрытие модального окна по клику вне его области (на затемненный фон)
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Обработка формы
function submitForm(e) {
    e.preventDefault();
    
    // Здесь мы собираем данные
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const car = document.getElementById('car').value;
    
    // Эмуляция успешной отправки
    const btn = e.target.querySelector('button');
    const originalText = btn.textContent;
    
    btn.textContent = 'Отправка...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.textContent = 'Заявка отправлена!';
        btn.style.backgroundColor = '#4CAF50'; // Зеленый цвет успеха
        
        // Очищаем форму и закрываем через секунду
        setTimeout(() => {
            e.target.reset();
            closeModal();
            // Возвращаем кнопку в исходное состояние
            btn.textContent = originalText;
            btn.style.backgroundColor = '';
            btn.disabled = false;
        }, 1500);
        
    }, 1000);
}

// Плавная прокрутка при клике на меню (с учетом фиксированной шапки)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
