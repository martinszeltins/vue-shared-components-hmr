In order to be able to edit shared components from an app that uses it, you need to create a symlink to node_modules.

1. `Stop the dev server`
2. `Delete node_modules/shared directory`
3. `Create a symlink from shared repo to node_modules/shared`
4. `Run the dev server`
5. `When building for prod it cannot be a symlink but needs to be its own copied over directory`

Stuff:

`yarn && timeout 5s yarn dev && rm -rf /home/martins/Programming/test/shared-frontend/my-vue-app/node_modules/shared && ln -s /home/martins/Programming/test/shared-frontend/shared /home/martins/Programming/test/shared-frontend/my-vue-app/node_modules/shared && yarn dev`
