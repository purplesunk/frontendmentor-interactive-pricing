// Range Input Color for Chrome
const range = document.querySelector('[type="range"]')
const toggle = document.querySelector('[type="checkbox"]')

const inputRangeBgColor = target => {
  let value = target.value
  target.style.background = 'linear-gradient(to right, #A5F3EB 0%, #A5F3EB ' + value + '%, #EAEEFB ' + value + '%)'
}

// Interactive things
const pricing = index => {
  const pageviews = [10, 50, 100, 500, 1000]
  const price = [8, 12, 16, 24, 36]

  const pageviewElem = document.querySelector('.page')
  const priceElem = document.querySelector('.prices')

  if (toggle.checked) {
    let discount = price[index] - (price[index] * 25 / 100)

    priceElem.innerHTML = '$' + (discount * 12).toFixed(2)
     if (index > 1) {
      pageviewElem.innerHTML = (pageviews[index] * 12 / 1000) + 'M pageviews'
    } else {
      pageviewElem.innerHTML = pageviews[index] * 12 + 'K pageviews'
    }
  } else {
    priceElem.innerHTML = '$' + price[index].toFixed(2)
    if (index > 3) {
      pageviewElem.innerHTML = pageviews[index] / 1000 + 'M pageviews'
    } else {
      pageviewElem.innerHTML = pageviews[index] + 'K pageviews'
    }
  }

}

// toggle button 
const checkToggle = _ => {
  const monthElem = document.querySelector('.month')
  if(!toggle.checked) {
    monthElem.innerHTML = '/month'
  } else {
    monthElem.innerHTML = '/year'
  }
}

range.addEventListener('input', event => {
  target = event.currentTarget
  inputRangeBgColor(target)
  pricing(target.value / 25)
})

toggle.addEventListener('click', _ => {
  checkToggle()
  pricing(range.value / 25)
})

inputRangeBgColor(range)
pricing(range.value / 25)
checkToggle()
