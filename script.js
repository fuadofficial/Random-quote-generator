const quotes = ["Lorem, ipsum dolor",
    "sit amet consectetur adipisicing elit.",
    "Deleniti tempora, molestiae labore velit culpa impedit?",
    "Doloremque nam impedit porro quidem. Sunt rem facere unde quis maxime minima ab,",
    "officiis exercitationem."]

const usedIndexes = new Set()
const quoteElement = document.getElementById('quote')

const genetateQuote = () => {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)
        if (usedIndexes.has(randomIdx)) continue
        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote
        usedIndexes.add(randomIdx)
        break
    }
}