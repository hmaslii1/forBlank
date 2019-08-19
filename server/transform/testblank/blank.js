/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.login = async (session, models, vars) => {
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.blank = async (session, models, vars) => {
    models.blank = vars.page;
    await session.screen('blank');
};