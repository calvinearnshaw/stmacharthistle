const express = require('express');
const router = express.Router();

const request = require('request');
const cheerio = require('cheerio');

// This retrieves the league table for AAFA Div 2 East.
router.get('/', async (req, res) => {
    await request('https://aberdeenshireafa.com/leagues/division-two-east/', (error, response, html) => {
        if (!error && response.statusCode === 200) {
            const $ = cheerio.load(html);
            let leagueTable = [];

            // Adjust the selector based on the structure of the HTML on the website
            $("table tr").each((i, el) => {
                const position = $(el).find("td:nth-child(1)").text().trim();
                const team = $(el).find("td:nth-child(2)").text().trim();
                const played = $(el).find("td:nth-child(3)").text().trim();
                const won = $(el).find("td:nth-child(4)").text().trim();
                const drawn = $(el).find("td:nth-child(5)").text().trim();
                const lost = $(el).find("td:nth-child(6)").text().trim();
                const goalsFor = $(el).find("td:nth-child(7)").text().trim();
                const goalsAgainst = $(el).find("td:nth-child(8)").text().trim();
                const goalDifference = $(el).find("td:nth-child(9)").text().trim();
                const points = $(el).find("td:nth-child(10)").text().trim();

                if (position === "") {
                    return true;
                }

                leagueTable.push({
                    pos: position,
                    team: team,
                    played: played,
                    win: won,
                    draw: drawn,
                    loss: lost,
                    gFor: goalsFor,
                    gAgainst: goalsAgainst,
                    goalDiff: goalDifference,
                    pts: points
                });
            });

            leagueTable = leagueTable.slice(0, 9);

            res.json(leagueTable);
        } else {
            res.status(response.statusCode).send("Error while fetching data");
        }
    });
});

module.exports = router;