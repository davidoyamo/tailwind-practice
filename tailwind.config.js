/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'hero-image': 'url(/images/drive.jpg)',
                'city-image': 'url(/images/city.jpg)',
                'parking-image': 'url(/images/parking.jpg)',
                'safe-image': 'url(/images/safe.jpg)',
                'instagram': 'url(/images/instagram.png)',
                'facebook': 'url(/images/facebook.png)',
                'x': 'url(/images/twitter.png)',
                'youtube': 'url(/images/youtube.png)',



            }
        },

    },
    plugins: [],
}