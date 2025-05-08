# Jay-Parameterized-Build-Pipeline

This project defines a Jenkins pipeline for a simple web application. The pipeline is parameterized, allowing users to select the environment (`dev`, `stage`, `prod`) and app version during the build process.

## Project Structure

- `Jenkinsfile`: Jenkins pipeline script defining the build, config loading, and deployment steps.
- `app/`: Web app source code (e.g., Node.js, React).
- `configs/`: Environment-specific config files.
- `deploy/`: Folder for storing build artifacts in environment-specific subdirectories (`dev/`, `stage/`, `prod/`).

## Setup Instructions

1. **Install Jenkins**: Follow the [Jenkins installation guide](https://www.jenkins.io/doc/book/installing/).
2. **Install Required Plugins**:
   - Pipeline Plugin
   - Git Plugin
   - Environment Injector Plugin (optional)
3. **Create a New Jenkins Job**:
   - Select **Pipeline** as the job type.
   - Under **Pipeline** -> **Definition**, choose **Pipeline script from SCM**.
   - Provide the Git repository URL where your code is hosted.
   - Ensure the `Jenkinsfile` is in the root of your repository.
4. **Parameterize the Pipeline**: Add parameters for `ENV` (choice: `dev`, `stage`, `prod`) and `APP_VERSION` (string parameter).
5. **Trigger the Build**: Run the pipeline with selected parameters.

## How it Works

1. The user selects the **environment** (`dev`, `stage`, `prod`) and specifies the **app version** when triggering the build.
2. The pipeline checks out the code, builds the app, and loads environment-specific configurations.
3. The app is deployed to the corresponding environment folder (`deploy/dev/`, `deploy/stage/`, `deploy/prod/`).
4. A success message is printed when the build and deployment are complete.

## Example

```bash
$ curl http://localhost:8080/job/Jay-Parameterized-Build/buildWithParameters?ENV=dev&APP_VERSION=v1.0.1



---

### **How to Run the Project**

1. **Install Jenkins** on your local machine or server.
2. **Create a new Jenkins job** and copy the `Jenkinsfile` content into the pipeline configuration.
3. Set up the **Git repository** where your app’s source code is stored (and where the `Jenkinsfile` is located).
4. **Configure Parameters**: Ensure you have `ENV` (choice: `dev`, `stage`, `prod`) and `APP_VERSION` (string) set up.
5. **Run the Job**: Trigger the build, select the environment and version, and Jenkins will handle the rest.

---

This should cover everything required to set up your **Parameterized Build Pipeline** in Jenkins. Let me know if you'd like further customization or additions!
