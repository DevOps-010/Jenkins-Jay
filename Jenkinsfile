pipeline {
    agent any

    parameters {
        choice(name: 'ENV', choices: ['dev', 'stage', 'prod'], description: 'Select the environment')
        string(name: 'APP_VERSION', defaultValue: '1.0', description: 'Enter the app version')
    }

    environment {
        CONFIG_FILE = "configs/${params.ENV}.env"
    }

    stages {
        stage('Parameter Input') {
            steps {
                echo "Selected environment: ${params.ENV}"
                echo "Selected version: ${params.APP_VERSION}"
            }
        }

        stage('Checkout & Build') {
            steps {
                echo "Checking out and building the project..."
                // Checkout the repository
                git 'https://github.com/DevOps-010/Jenkins-Jay'

                // Install dependencies (assuming Node.js project)
                script {
                    sh 'npm install'
                    sh 'npm run build' // Adjust according to your build process
                }
            }
        }

        stage('Environment-Specific Config') {
            steps {
                echo "Loading environment-specific config for ${params.ENV}..."
                // Load the config based on the environment parameter
                script {
                    sh "cp ${CONFIG_FILE} .env"
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the build artifacts to the ${params.ENV} environment..."
                // Copy build artifacts to environment-specific folder
                script {
                    sh "mkdir -p deploy/${params.ENV}"
                    sh "cp -r build/* deploy/${params.ENV}/"
                }
            }
        }

        stage('Notify') {
            steps {
                echo "Sending notifications..."
                // Add notification step (e.g., Slack, Email, etc.)
                // Example:
                // slackSend(channel: '#build-notifications', message: "Build and deploy for ${params.ENV} completed successfully.")
            }
        }
    }
    post {
        always {
            echo "Cleaning up..."
            // Clean up or notify about the result
        }
    }
}
