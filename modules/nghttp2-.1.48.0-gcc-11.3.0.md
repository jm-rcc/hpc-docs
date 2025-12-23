# nghttp2 1.48.0  
![Static Badge](https://img.shields.io/badge/class-lib-D7D1CC)  
  
  

This is an implementation of the Hypertext Transfer Protocol version 2 in C.

The framing layer of HTTP/2 is implemented as a reusable C library.
On top of that, we have implemented an HTTP/2 client, server and proxy.
We have also developed load test and benchmarking tools for HTTP/2.

An HPACK encoder and decoder are available as a public API.  
  
  
## Homepage  
The homepage for nghttp2 1.48.0 
[https://github.com/nghttp2/nghttp2](https://github.com/nghttp2/nghttp2)  
### Usage  
To use the module on Bunya, load it with this command:  
  **`module load nghttp2/.1.48.0-gcc-11.3.0`**  
  
### Toolchain  
GCC-11.3.0  
  
### Toolchain Options  
pic: True  
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
nghttp2 depends on the following modules, and they will be loaded automatically with this module.  
  
[OpenSSL 1.1  (system-system)](openssl-1.1.md)  
[nghttp3 0.6.0  (GCCcore-11.3.0)](nghttp3-.0.6.0-gcccore-11.3.0.md)  
[Python 3.10.4  (GCCcore-11.3.0)](python-3.10.4-gcccore-11.3.0.md)  
[libxml2 2.9.13  (GCCcore-11.3.0)](libxml2-.2.9.13-gcccore-11.3.0.md)  
[Jansson 2.14  (GCC-11.3.0)](jansson-2.14-gcc-11.3.0.md)  
[jemalloc 5.3.0  (GCCcore-11.3.0)](jemalloc-.5.3.0-gcccore-11.3.0.md)  
[ngtcp2 0.7.0  (GCC-11.3.0)](ngtcp2-.0.7.0-gcc-11.3.0.md)  
[libevent 2.1.12  (GCCcore-11.3.0)](libevent-.2.1.12-gcccore-11.3.0.md)  
[libev 4.33  (GCC-11.3.0)](libev-.4.33-gcc-11.3.0.md)  
[c-ares 1.18.1  (GCCcore-11.3.0)](c-ares-.1.18.1-gcccore-11.3.0.md)  
  
## Dependency of modules  
The following modules will load nghttp2 as dependency.  
  
[MEGAHIT 1.2.9  (GCCcore-11.3.0)](megahit-1.2.9-gcccore-11.3.0.md)  
[zstd 1.5.2  (GCCcore-11.3.0)](zstd-1.5.2-gcccore-11.3.0.md)  
[< Software](../software_shortlist.md)  
