container_name='platform-api-grpc'
image_name='platform-api-grpc';
jenkins_workspace='/root/docker/jenkins/workspace/platform-api-grpc';
image_version=`date +%Y%m%d%H%M`;
in_port='3003';
out_port='31003';

echo '------Start deployment------'
cd ${jenkins_workspace};
ls;
#sudo npm i;
#sudo npm run build;
chmod 777 -R ${jenkins_workspace};
echo ${image_version};

docker stop ${container_name};
docker rm ${container_name};
docker build -t ${image_name}:${image_version} .;

docker images;
docker run -p ${out_port}:${in_port} -p 8888:8888 -d --name ${container_name} ${container_name}:$image_version;

echo '------End deployment------'
