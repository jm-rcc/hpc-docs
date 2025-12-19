# XZ 5.4.2  
(tools)  
  
  
xz: XZ utilities  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '12.3.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load xz/.5.4.2-gcccore-12.3.0`** to load the module on Bunya.  
  
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
dependencies = [
    # use gettext built with system toolchain as build dep to avoid cyclic dependency (XZ -> gettext -> libxml2 -> XZ)
    ('gettext', '0.21.1', '', SYSTEM),
    ('binutils', '2.40'),
]  
  
