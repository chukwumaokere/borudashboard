// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

var bugs = [
  '38254 - Power Stop LLC: [RMA/Stopwatch] Stopwatch Tracker',
  "38359 - Power Stop LLC: [Tickets/Summary] - Reply Email Via comment",
  "38194 - Redstone Capital: [Lead/field = Lead Status] Do not Delete Lead after",
  "38426 - Project Pilot: CKeditor does not save all data"
];
var website = [
  "38325 - Redstone Capital: [Duplicate Check ] User Interface",
  '38477 - BTTW Warranty: [Push to Prod] Prep for push to prod'
];
var server = [
  '38463 - Monolithic Power Systems, Inc.: [Server Upgrade] Upgrade Monolithic CRMTEST server',
  "38406 - H2Ocean, Inc.: [Vtiger Build Duplicate] Client would like to duplicate their live code but reset record data",
  "38403 - Vertical LLC: [Authorize.Net/Push to Prod] Push auth.net code to prod",
  '38464 - Power Stop LLC: [RMA/FedEx] Change the FedEx API from Development to production'
];

module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  bugs,
  website,
  server
};
