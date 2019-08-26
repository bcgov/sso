'use strict';
const options= require('pipeline-cli').Util.parseArguments()
const changeId = options.pr //aka pull-request
const version = '1.1.0'
const name = 'sso'

const phases = {
  build: {namespace:'ocp101a-tools'  , name: `${name}`, phase: 'build', changeId:changeId, suffix: `-build-${changeId}`, instance: `${name}-build-${changeId}`, version:`${version}-${changeId}`, tag:`${version}-${changeId}`},
   // sbox: {namespace:'ocp101a-sandbox', name: `${name}`, phase: 'sbox' , changeId:changeId, suffix: `-sbox-${changeId}` , instance: `${name}-sbox-${changeId}` , version:`${version}-${changeId}`, tag:`sbox-${version}-${changeId}`, host: `sso-${changeId}-devops-sso-sandbox.pathfinder.gov.bc.ca`},
    dev: {namespace:'ocp101a-dev'    , name: `${name}`, phase: 'dev'  , changeId:changeId, suffix: '-dev'              , instance: `${name}-dev`              , version:`${version}-${changeId}`, tag:`dev-${version}`             , host: 'sso-dev.caggles.pathfinder.gov.bc.ca'},
   // test: {namespace:'ocp101a-test'   , name: `${name}`, phase: 'test' , changeId:changeId, suffix: '-test'             , instance: `${name}-test`             , version:`${version}-${changeId}`, tag:`test-${version}`            , host: 'sso-test.pathfinder.gov.bc.ca'},
   // prod: {namespace:'ocp101a-prod'   , name: `${name}`, phase: 'prod' , changeId:changeId, suffix: '-prod'             , instance: `${name}-prod`             , version:`${version}-${changeId}`, tag:`prod-${version}`            , host: 'sso.pathfinder.gov.bc.ca'}
}

module.exports = exports = phases