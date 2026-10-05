// =========================
// FIRESTORE ANNOUNCEMENTS
// =========================

import { collection, getDocs }
    from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

import { db } from "./firebase.js";

const announcementsContainer =
    document.getElementById("announcementsContainer");

async function loadAnnouncements() {
    if (!announcementsContainer) return;

    try {
        const snapshot = await getDocs(
            collection(db, "announcements")
        );

        announcementsContainer.innerHTML = "";

        const announcements = [];

        snapshot.forEach((doc) => {
            const data = doc.data();

            // Only display published announcements
            if (data.isPublished === true) {
                announcements.push({
                    id: doc.id,
                    ...data
                });
            }
        });

        // Newest announcements first
        announcements.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });

        if (announcements.length === 0) {
            announcementsContainer.innerHTML = `
                <div class="alert alert-info">
                    No announcements available at the moment.
                </div>
            `;
            return;
        }

        announcements.forEach((announcement) => {

            const card = document.createElement("article");

            card.className = "announcement-card";

            card.innerHTML = `
                <div class="announcement-content">

                    <span class="announcement-date">
                        ${announcement.date || ""}
                    </span>

                    <h3>
                        ${announcement.title || "Untitled Announcement"}
                    </h3>

                    <p>
                        ${announcement.description || ""}
                    </p>

                </div>
            `;

            announcementsContainer.appendChild(card);
        });

    } catch (error) {

        console.error(
            "Error loading announcements:",
            error
        );

        announcementsContainer.innerHTML = `
            <div class="alert alert-danger">
                Unable to load announcements right now.
            </div>
        `;
    }
}

loadAnnouncements();