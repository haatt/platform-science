# platform-science

To run the script that will be useful to assign the routes to the drivers you must download this project to your local environment making sure you have node.js^14.0.0 or higher.

You can download the project to your computer using git and from a console with the following command.
	Example:
	git clone https://github.com/haatt/platform-science.git

Once the project is downloaded to your local environment you must run "yarn install", although it does not require the installation of external libraries it is recommended since yarn will help us to have control of our project.
  Example: "C:\wamp64\www platform-science> yarn install".

From a terminal from which you have the necessary permissions for script execution, access the path to the directory where your project is stored (make sure you have the necessary permissions to access the files).
  Example: "C:\wamp64\www-platform-science".

You must make sure that you have the files with the lists of addresses and drivers according to the following formats.

  Drivers:
    Each name must be separated by a line break.
    Do not add unnecessary or duplicate information.
    It is not recommended to change the order of names (i.e. swap the position of surnames or first names).
    The use of upper and lower case is important (Example: Rafael is different from rafael).
    The file name is not relevant although it is important to identify which file contains the names and which contains the addresses as they must be added in a specific order.
    The document must be a plain text (.txt) file.
      Example: 
        Everardo Welch
        Orval Mayert
        Howard Emmerich

  Addresses:
    Each address must be separated by a line break.
    Do not add unnecessary or duplicate information.
    It is not recommended to change the order of the addresses (the correct format is "215 Osinski Manors, San Diego, CA 92126").
    Capitalization is important (Example: "215 Osinski Manors, San Diego, CA 92126" is different from "215 osinski manors, san diego, ca 92126").
    The file name is not relevant although it is important that you identify which file contains the names and which file contains the addresses as they must be added in a specific order.
    The document must be a plain text (.txt) file.
      Example: 
        215 Osinski Manors, San Diego, CA 92126
        9856 Marvin Stravenue, San Diego, CA 92126
        7127 Kathlyn Ferry, San Diego, CA 92126

Make sure that you have the necessary read permissions for the folder containing the .txt files with the names and addresses.

Now you can run the script to get the result of path mapping to the drivers, to run the script you can type in the console the command 
"yarn run-test <filename with driver names> <filename with address names>", or you can directly access the index file from the console as follows 
"node index.js <filename with driver names> <filename with address names>".
  Example 1:
	C:\wamp64\www\platform-science>yarn run-test C:\wamp64\www\test\assets\10-list-drivers.txt C:\wamp64\www\test\assets\10-list-addresses.txt

	Example 2:
	C:\wamp64\www\platform-science>node index.js
  C:\wamp64\www\test\assets\10-list-drivers.txt C:\wamp64\www\test\assets\10-list-addresses.txt

  Note: Be sure to always add the file with the driver names before the file with the address names.
  