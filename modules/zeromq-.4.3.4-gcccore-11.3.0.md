[List of Software](../software_shortlist.md)  
# ZeroMQ 4.3.4 
![Static Badge](https://img.shields.io/badge/class-devel-D7D1CC)  
  
  
ZeroMQ looks like an embeddable networking library but acts like a concurrency framework.
 It gives you sockets that carry atomic messages across various transports like in-process,
 inter-process, TCP, and multicast. You can connect sockets N-to-N with patterns like fanout,
 pub-sub, task distribution, and request-reply. It's fast enough to be the fabric for clustered
 products. Its asynchronous I/O model gives you scalable multicore applications, built as asynchronous
 message-processing tasks. It has a score of language APIs and runs on most operating systems.  
  
  
## Homepage  
The homepage for ZeroMQ 4.3.4  
[https://www.zeromq.org/](https://www.zeromq.org/)  
### Usage  
To use this module on Bunya, load it with this command:  
  **`module load zeromq/.4.3.4-gcccore-11.3.0`**  
  
### Toolchain  
GCCcore-11.3.0  
  
### Toolchain Options  
(none)  
## Available on architecture types  
- epyc3 a100  
- epyc3 h100  
- epyc3 l40  
- epyc3 mi210  
- epyc3  
- epyc4 a16  
- epyc4 l40s  
- epyc4 mi210  
- epyc4  
- xeonsp4 h100  
- xeonsp4  
  
  
## Dependencies  
ZeroMQ depends on the following modules, and they will be loaded automatically with this module.  
  
[OpenPGM 5.2.122  (GCCcore-11.3.0)](openpgm-.5.2.122-gcccore-11.3.0.md)  
[libsodium 1.0.18  (GCCcore-11.3.0)](libsodium-.1.0.18-gcccore-11.3.0.md)  
[util-linux 2.38  (GCCcore-11.3.0)](util-linux-.2.38-gcccore-11.3.0.md)  
  
## Loaded by  
The following modules will load ZeroMQ as dependency.  
  
[IPython 8.5.0  (GCCcore-11.3.0)](ipython-8.5.0-gcccore-11.3.0.md)  
  
## Other available modules  
These other versions of ZeroMQ are available on Bunya.  
[zeromq/4.3.4-gcccore-11.3.0](../modules/zeromq-.4.3.4-gcccore-11.3.0.md)  
[zeromq/4.3.4-gcccore-10.3.0](../modules/zeromq-.4.3.4-gcccore-10.3.0.md)  
