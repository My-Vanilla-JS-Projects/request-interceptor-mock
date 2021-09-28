const githubMock = {
    request: {
        url: 'https://api.github.com/users/simaodeveloper',
        method: 'get'
    },
    response: {
        login: "simaodeveloper",
    }
}

const mocks = [
    githubMock,
];

export default mocks;