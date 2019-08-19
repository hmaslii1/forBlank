/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.help = async (session, models, vars) => {
    await session.transform.testblank.update('homeiconcolorblocks', models.homeiconcolorblocks);
    await session.transform.testblank.action('homeiconcolorblocks', 'help');
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.alerts = async (session, models, vars) => {
    await session.transform.testblank.update('homeiconcolorblocks', models.homeiconcolorblocks);
    await session.transform.testblank.action('homeiconcolorblocks', 'alerts');
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.newIssue = async (session, models, vars) => {
    await session.transform.testblank.update('homeiconcolorblocks', models.homeiconcolorblocks);
    await session.transform.testblank.action('homeiconcolorblocks', 'newIssue');
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.monitor = async (session, models, vars) => {
    await session.transform.testblank.update('homeiconcolorblocks', models.homeiconcolorblocks);
    await session.transform.testblank.action('homeiconcolorblocks', 'monitor');
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.unassigned = async (session, models, vars) => {
    await session.transform.testblank.update('homeiconcolorblocks', models.homeiconcolorblocks);
    await session.transform.testblank.action('homeiconcolorblocks', 'unassigned');
};
/**
 * @param {Session} session
 * @param {Models} models
 * @param {Vars} vars
*/
exports.assigned = async (session, models, vars) => {
    await session.transform.testblank.update('homeiconcolorblocks', models.homeiconcolorblocks);
    await session.transform.testblank.action('homeiconcolorblocks', 'assigned');
};