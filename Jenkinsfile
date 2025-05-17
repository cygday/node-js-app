
pipeline {
	agent any
	
	environment {
		IMAGE_NAME = 'my-node-app'
		IMAGE_TAG = 'latest'
	}


	stages {
		stage('checkout code'){
		  steps {
		    git 'https://github.com/cygday/node-js-app.git'
		  }
		}

		stage('install dependencies'){
		  steps {
		    sh 'npm install'
		  } 
		}
		stage('build & run'){
		  steps {
		    sh 'npm test'
		    }
		}
	
		stage('run docker container') {
		  steps {
			sh 'docker run -d -p 3001:3001 --name my-node-app $IMAGE_NAME:$IMAGE_TAG'
			}
	
		  }
	}

	post {
		always {
		  sh 'docker rm -f my-node-app || true'
		  }
		}

}

