const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 0;

function getPagination(query) {
    const page = parseInt(query.page) || DEFAULT_PAGE_NUMBER;
    const limit = parseInt(query.limit) || DEFAULT_PAGE_LIMIT;
    const offset = (page - 1) * limit;
    return { limit, offset };
}

module.exports = {
    getPagination,
};