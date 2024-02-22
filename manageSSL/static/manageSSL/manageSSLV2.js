newapp.controller('sslIssueCtrlV2', function ($scope, $http) {

    $scope.sslIssueCtrl = true;
    $scope.manageSSLLoading = true;
    $scope.issueSSLBtn = true;
    $scope.canNotIssue = true;
    $scope.sslIssued = true;
    $scope.couldNotConnect = true;

    $scope.showbtn = function () {
        $scope.issueSSLBtn = false;
    };

    $scope.issueSSL = function () {
        $scope.manageSSLLoading = false;

        var url = "/manageSSL/issueSSL";


        var data = {
            virtualHost: $scope.virtualHost,
        };

        var config = {
            headers: {
                'X-CSRFToken': getCookie('csrftoken')
            }
        };

        $http.post(url, data, config).then(ListInitialDatas, cantLoadInitialDatas);


        function ListInitialDatas(response) {


            if (response.data.SSL == 1) {

                $scope.sslIssueCtrl = true;
                $scope.manageSSLLoading = true;
                $scope.issueSSLBtn = false;
                $scope.canNotIssue = true;
                $scope.sslIssued = false;
                $scope.couldNotConnect = true;

                $scope.sslDomain = $scope.virtualHost;


            } else {
                $scope.sslIssueCtrl = true;
                $scope.manageSSLLoading = true;
                $scope.issueSSLBtn = false;
                $scope.canNotIssue = false;
                $scope.sslIssued = true;
                $scope.couldNotConnect = true;
                $scope.errorMessage = response.data.error_message;

            }


        }

        function cantLoadInitialDatas(response) {
            $scope.sslIssueCtrl = true;
            $scope.manageSSLLoading = true;
            $scope.issueSSLBtn = false;
            $scope.canNotIssue = true;
            $scope.sslIssued = true;
            $scope.couldNotConnect = false;

        }


    };

});
newapp.controller('sslIssueForHostNameCtrlV2', function ($scope, $http) {

    $scope.sslIssueCtrl = true;
    $scope.manageSSLLoading = true;
    $scope.issueSSLBtn = true;
    $scope.canNotIssue = true;
    $scope.sslIssued = true;
    $scope.couldNotConnect = true;

    $scope.showbtn = function () {
        $scope.issueSSLBtn = false;
    };


    $scope.issueSSL = function () {
        $scope.manageSSLLoading = false;

        var url = "/manageSSL/obtainHostNameSSL";


        var data = {
            virtualHost: $scope.virtualHost,
        };

        var config = {
            headers: {
                'X-CSRFToken': getCookie('csrftoken')
            }
        };

        $http.post(url, data, config).then(ListInitialDatas, cantLoadInitialDatas);


        function ListInitialDatas(response) {


            if (response.data.SSL == 1) {

                $scope.sslIssueCtrl = true;
                $scope.manageSSLLoading = true;
                $scope.issueSSLBtn = false;
                $scope.canNotIssue = true;
                $scope.sslIssued = false;
                $scope.couldNotConnect = true;

                $scope.sslDomain = $scope.virtualHost;


            } else {
                $scope.sslIssueCtrl = true;
                $scope.manageSSLLoading = true;
                $scope.issueSSLBtn = false;
                $scope.canNotIssue = false;
                $scope.sslIssued = true;
                $scope.couldNotConnect = true;
                $scope.errorMessage = response.data.error_message;

            }


        }

        function cantLoadInitialDatas(response) {
            $scope.sslIssueCtrl = true;
            $scope.manageSSLLoading = true;
            $scope.issueSSLBtn = false;
            $scope.canNotIssue = true;
            $scope.sslIssued = true;
            $scope.couldNotConnect = false;

        }


    };

});
newapp.controller('sslIssueForMailServerV2', function ($scope, $http) {

    $scope.sslIssueCtrl = true;
    $scope.manageSSLLoading = true;
    $scope.issueSSLBtn = true;
    $scope.canNotIssue = true;
    $scope.sslIssued = true;
    $scope.couldNotConnect = true;

    $scope.showbtn = function () {
        $scope.issueSSLBtn = false;
    };


    $scope.issueSSL = function () {

        $scope.manageSSLLoading = false;

        var url = "/manageSSL/obtainMailServerSSL";


        var data = {
            virtualHost: $scope.virtualHost,
        };

        var config = {
            headers: {
                'X-CSRFToken': getCookie('csrftoken')
            }
        };

        $http.post(url, data, config).then(ListInitialDatas, cantLoadInitialDatas);


        function ListInitialDatas(response) {


            if (response.data.SSL === 1) {

                $scope.sslIssueCtrl = true;
                $scope.manageSSLLoading = true;
                $scope.issueSSLBtn = false;
                $scope.canNotIssue = true;
                $scope.sslIssued = false;
                $scope.couldNotConnect = true;

                $scope.sslDomain = $scope.virtualHost;


            } else {
                $scope.sslIssueCtrl = true;
                $scope.manageSSLLoading = true;
                $scope.issueSSLBtn = false;
                $scope.canNotIssue = false;
                $scope.sslIssued = true;
                $scope.couldNotConnect = true;
                $scope.errorMessage = response.data.error_message;

            }


        }

        function cantLoadInitialDatas(response) {
            $scope.sslIssueCtrl = true;
            $scope.manageSSLLoading = true;
            $scope.issueSSLBtn = false;
            $scope.canNotIssue = true;
            $scope.sslIssued = true;
            $scope.couldNotConnect = false;

        }


    };

});
newapp.controller('sslIssueCtrlV2V2', function ($scope, $http) {

    $scope.manageSSLLoading = true;

    $scope.showbtn = function () {
        $scope.issueSSLBtn = false;
    };

    $scope.issueSSL = function () {
        $scope.manageSSLLoading = false;

        var url = "/manageSSL/v2IssueSSL";


        var data = {
            virtualHost: $scope.virtualHost,
        };

        var config = {
            headers: {
                'X-CSRFToken': getCookie('csrftoken')
            }
        };

        $http.post(url, data, config).then(ListInitialDatas, cantLoadInitialDatas);


        function ListInitialDatas(response) {

            $scope.manageSSLLoading = true;


            if (response.data.SSL === 1) {

                $scope.sslStatus = 'Issued.';
                $scope.sslLogs = response.data.sslLogs;

            } else {
                $scope.sslStatus = 'Failed.';
                $scope.sslLogs = response.data.sslLogs;

            }


        }

        function cantLoadInitialDatas(response) {
            $scope.sslIssueCtrl = true;
            $scope.manageSSLLoading = true;
            $scope.issueSSLBtn = false;
            $scope.canNotIssue = true;
            $scope.sslIssued = true;
            $scope.couldNotConnect = false;

        }


    };

});