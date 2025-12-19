# XZ 5.6.3  
(tools)  
  
  
xz: XZ utilities  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '14.2.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load xz/.5.6.3-gcccore-14.2.0`** to load the module on Bunya.  
  
## Available on architecture types  
- epyc3 a100  
- epyc3 l40  
- epyc4 a16  
- xeonsp4 h100  
  
  
## Dependencies  
dependencies = [
    # use gettext built with system toolchain as build dep to avoid cyclic dependency (XZ -> gettext -> libxml2 -> XZ)
    ('gettext', '0.22.5', '', SYSTEM),
    ('binutils', '2.42'),
]  
  
