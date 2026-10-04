
// =========================
// GALLERY FILTERING
// =========================

const galleryFilters = document.querySelectorAll(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

galleryFilters.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        galleryFilters.forEach((filter) => {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        galleryItems.forEach((item) => {
            const category = item.dataset.category;

            if (selectedFilter === "all" || category === selectedFilter) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });
});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.reportValidity()) {
            return;
        }

        const fullName = document.getElementById("fullName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();

        const whatsappMessage =
            `Hello Matendo Day Care Centre,\n\n` +
            `Name: ${fullName}\n` +
            `Phone: ${phone}\n` +
            `Email: ${email || "Not provided"}\n` +
            `Subject: ${subject}\n\n` +
            `Message:\n${message}`;

        const whatsappURL =
            `https://wa.me/255613938219?text=${encodeURIComponent(whatsappMessage)}`;

        formFeedback.textContent =
            "Opening WhatsApp. Review your message and press Send to contact the school.";

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}


// =========================
// ADMISSION FORM
// =========================

const admissionForm = document.getElementById("admissionForm");
const admissionFeedback = document.getElementById("admissionFeedback");

if (admissionForm && admissionFeedback) {
    admissionForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!admissionForm.reportValidity()) {
            return;
        }

        const fields = {
            childName: document.getElementById("childName").value.trim(),
            dateOfBirth: document.getElementById("dateOfBirth").value,
            childAge: document.getElementById("childAge").value,
            childGender: document.getElementById("childGender").value,
            classApplying: document.getElementById("classApplying").value,
            residence: document.getElementById("residence").value.trim(),
            previousSchool: document.getElementById("previousSchool").value.trim(),
            parentName: document.getElementById("parentName").value.trim(),
            parentPhone: document.getElementById("parentPhone").value.trim(),
            parentEmail: document.getElementById("parentEmail").value.trim(),
            guardianAddress: document.getElementById("guardianAddress").value.trim(),
            emergencyContact: document.getElementById("emergencyContact").value.trim(),
            healthInformation: document.getElementById("healthInformation").value.trim(),
            additionalInformation: document.getElementById("additionalInformation").value.trim()
        };

        const message = `Hello Matendo Day Care Centre,

I would like to inquire about admission.

CHILD INFORMATION
Name: ${fields.childName}
Date of birth: ${fields.dateOfBirth}
Age: ${fields.childAge}
Gender: ${fields.childGender}
Class: ${fields.classApplying}
Residence: ${fields.residence}
Previous school: ${fields.previousSchool || "Not provided"}

PARENT/GUARDIAN INFORMATION
Name: ${fields.parentName}
Phone: ${fields.parentPhone}
Email: ${fields.parentEmail || "Not provided"}
Address: ${fields.guardianAddress}
Emergency contact: ${fields.emergencyContact}

HEALTH AND OTHER INFORMATION
Medical or care information: ${fields.healthInformation || "Not provided"}
Additional information: ${fields.additionalInformation || "None"}

Please guide me on the official admission process and form requirements.`;

        const whatsappURL =
            `https://wa.me/255613938219?text=${encodeURIComponent(message)}`;

        admissionFeedback.textContent =
            "Opening WhatsApp. Review the application details before sending.";

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}

// =========================
// AUTOMATIC FOOTER YEAR
// =========================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
