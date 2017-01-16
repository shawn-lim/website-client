module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  require('shipit-npm')(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/shipit-monitor',
      dirToCopy: 'dist',
      branch: 'develop',
      deployTo: '/var/www/APPNAME',
      repositoryUrl: 'git@git.istuary.com:dev-ops/APPNAME.git',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 2,
      shallowClone: true
    },
    integration: {
      restart: 'sudo /sbin/start APPNAME || sudo /sbin/restart APPNAME',
      servers: 'opi@integration.istuary.co'
    },
    staging: {
      restart: 'sudo /sbin/start APPNAME || sudo /sbin/restart APPNAME',
      servers: 'shawn@dev-ops.istuary.com'
    }
  });
  shipit.task('restart', function(){
    return shipit.remote(shipit.config.restart);
  });
  shipit.on('deployed', function(){
     shipit.start('restart');
  });
  shipit.on('rollbacked', function(){
     shipit.start('restart');
  });
};
