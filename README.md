# VS Code Child Process Debug

This is a VS code project that lets you open a debugger on a parent process and a child at the same time.

It shows three ways to connect:
1. Connecting to one process at a time
2. Connecting to both together
3. Disconnecting and reconnecting

# Connecting to one process at a time

1. Switch to the debug view

3. Set a breakpoint in parent.js in the line that reads: <BR> `console.log('PARENT got message:', m);`

4. Set a breakpoint in child.js in the line that reads: <BR> `  console.log('CHILD got message:', m);`
2. Select `Program` as the launch configuration

3. Start the debugger by clicking on the green arrow key or F5. A debug widget <img src="https://code.visualstudio.com/images/debugging_actions.png"/> 
<br>will appear and the debugger will stop in `parent.js` and display the file in an editor pane. You'll get output in the console that looks like this: 

```
Debugging with inspector protocol because Node v6.10.0 was detected.
node --inspect=5858 --debug-brk parent.js 
Debugger listening on port 5858.
Warning: This is an experimental feature and could change at any time.
Debugger attached.
Parent running
Child started
[ '/home/mwolf/tools/node-v6.10.0-linux-x64/bin/node',
  '/home/mwolf/tools/junk/child.js' ]
******************* 
```
Like this one <img src="https://code.visualstudio.com/images/debugging_debug-actions-widget.png"/>

4. Choose `Child` in the launch configuration, and press the green arrow key to attach to the child.

> Note: in this case F5 will not attach to the child, but cause the already running parent to continue and stop at the breakpoint again.

5. The debug widget will now have a a drop-down list and let you switch between  the parent (launch) process or to the child. You can also disconnect from one or the other

6. If you press the green arrow in the debugger widget, or F5, the program will run to the next breakpoint--which by design is in the other process, display the code and stop there. Pressing F5 again moves it back.

7. If you have two tab sets open and move one file to each set, then you'll see it toggle back and forth as you hit successive breakpoints.

# Connecting to both together

1. Select the Program/Child launch configuration.

2. Press F5 of click on the green arrow.

3. The debugger will stop in parent.js and both 

# Disconnecting and reconnecting

1. If yu

