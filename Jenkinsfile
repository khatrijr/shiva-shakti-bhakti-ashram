#!groovy
pipeline {
    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from the Git repository
                git branch: 'develop', url: 'https://github.com/khatrijr/shiva-shakti-bhakti-ashram.git'
            }
        }

        stage('Build') {
            steps {
                // Install dependencies and build the React app
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests (if applicable)
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the React app to a server (example: copying files to a web server)
                sh 'rsync -avz ./build/ user@server:/path/to/deploy'
            }
        }
    }

    post {
        success {
            // Notification or additional actions upon successful pipeline execution
            echo 'Pipeline succeeded!'
        }
        failure {
            // Notification or additional actions upon pipeline failure
            echo 'Pipeline failed!'
        }
    }
}

