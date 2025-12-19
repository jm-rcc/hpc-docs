# OpenSSL 1.1  
(system)  
  
  
The OpenSSL Project is a collaborative effort to develop a robust, commercial-grade, full-featured,
 and Open Source toolchain implementing the Secure Sockets Layer (SSL v2/v3) and Transport Layer Security (TLS v1)
 protocols as well as a full-strength general purpose cryptography library.  
  
  
### Toolchain  
None  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load openssl/1.1`** to load the module on Bunya.  
  
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
dependencies = ['perl']

builddependencies = [('pkgconf', '1.8.0')]

# This easyconfig will wrap the OpenSSL installation in the host system.
# If the system provides the required binary, header files, and libraries for
# this version of OpenSSL, the installation directory of this module will be
# populated with symlinks to the system files. The minimum required version of
# OpenSSL can be finely controled with 'minimum_openssl_version' (defaults to
# easyconfig version).
# If the host system does not have this version of OpenSSL (or with the option
# wrap_system_openssl = False), EasyBuild will fall back to the following
# component list, which will be build and installed as usual.

components = [
    (name, '1.1.1w', {
        'easyblock': 'EB_OpenSSL',
        'source_urls': ['https://www.openssl.org/source/'],
        'sources': [SOURCELOWER_TAR_GZ],
        'checksums': ['cf3098950cb4d853ad95c0841f1f9c6d3dc102dccfcacd521d93925208b76ac8'],
        'start_dir': '%(namelower)s-%(version)s',
    }),
]  
  
