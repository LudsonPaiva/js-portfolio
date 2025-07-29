

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/LudsonPaiva/js-portfolio/refs/heads/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}