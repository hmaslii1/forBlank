/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.Submit = async (session, models, vars) => {
    await session.transform.testblank.update('blank', models.blank);
    await session.transform.testblank.action('blank', 'Submit');
};