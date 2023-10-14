const PORT = 8000
const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')

const app = express()

const websiteUrl = 'https://gamedevbeginner.com/'

axios(websiteUrl)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const questions = []

        $('.entry-title', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            questions.push({
                title,
                url
            })
        })
        console.log(questions)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log('server is running on port '+ PORT ))