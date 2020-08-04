# SwarmJS
SwarmJS is a framework for creating swarm intelligence.  It simulates embodied intelligence as well. The scope of the current iteration is to prove viability.
It is written in javascript so it can be ported to any other language or used in a web page showing original AI research.
It uses inheritance.  For example Ant is derived from Creature, and overrides methods like move().
The creatures can move around in 2D, 3D, 4D or any number of dimensional space.
A creature subclass such as Ant is associated and coupled with a scape class inherited from the Environment base class, e.g. AntScape
In this environment the individual Ant instances follow simple behavioral rules, but the swarms as a whole interact and create complex emergent behavior.
