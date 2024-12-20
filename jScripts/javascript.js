// פונקציה לשינוי התפריט לתפריט המבורגר במצב מובייל
function toggleNav() {
    // מוצאת את הניווט הראשי (main-nav) ומשנה את מצבו (הוספת/הסרת הקלאס "hide-mobile")
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

// פונקציה להחביא ולהציג מידע בכרטיס
function toggleCardInfo(cardId) {
    // שולפת את התוכן של הכרטיס לפי ה-id שניתן לפונקציה
    const cardContent = document.getElementById(cardId);
    // משנה את הקלאס "hidden" כדי להסתיר או להציג את המידע בכרטיס
    cardContent.classList.toggle("hidden");
}

// פונקציה לסינון כרטיסים לפי חיפוש
function filterCards(filterCriteria) {
    // מוצאת את כל הכרטיסים בעמוד
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        // בודקת אם שם הכרטיס כולל את הקריטריון שנמצא בשדה החיפוש
        const cardTitle = card.querySelector('h2').innerText;
        if (cardTitle.toLowerCase().includes(filterCriteria.toLowerCase())) {
            // אם הקריטריון נמצא בשם הכרטיס, הכרטיס יוצג
            card.style.display = 'block';
        } else {
            // אם הקריטריון לא נמצא, הכרטיס יוסתר
            card.style.display = 'none';
        }
    });
}

// פונקציה להציג את הפופ-אפ עם מידע על הרופא
function showDoctorInfo(doctorId) {
    // שולפת את הפופ-אפ של הרופא ומציגה אותו
    const popup = document.getElementById(doctorId);
    popup.style.display = 'flex';
}

// פונקציה לסגור את הפופ-אפ
function closePopup(doctorId) {
    // שולפת את הפופ-אפ של הרופא ומסתירה אותו
    const popup = document.getElementById(doctorId);
    popup.style.display = 'none';
}

// פונקציה לדירוג חיובי לכרטיס
function likeCard(cardId) {
    // מציגה הודעה שההצבעה נרשמה עם טקסט חיובי
    alert('תודה רבה! הצבעתך נרשמה במערכת לשימור!');
}

// פונקציה לדירוג שלילי לכרטיס
function dislikeCard(cardId) {
    // מציגה הודעה שההצבעה נרשמה עם טקסט שלילי
    alert('מצטערים לשמוע.. הצבעתך נרשמה במערכת לשיפור!');
}
