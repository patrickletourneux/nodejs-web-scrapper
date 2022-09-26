"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questions = [
    {
        type: 'text',
        name: 'url',
        initial: 'url',
        message: 'give a page to scrap',
    },
    {
        type: 'text',
        name: 'fileName',
        initial: 'fileName',
        message: 'give a filename ',
    },
    {
        type: 'select',
        name: 'value',
        message: 'make a choice',
        choices: [
            { title: 'screenshot', description: 'screenshot png file', value: 'screenshot' },
            { title: 'wikiSummary', description: 'wiki summary page txt file', value: 'wikiSummary' },
        ],
        initial: 0,
    },
];
exports.default = questions;
