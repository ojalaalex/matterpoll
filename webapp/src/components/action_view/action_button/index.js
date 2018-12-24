// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getConfig} from 'mattermost-redux/selectors/entities/general';

import {votedAnswers} from '../../../selector'
import {voteAnswer} from '../../../actions'

import ActionButton from './action_button';

function mapStateToProps(state) {
    const config = getConfig(state);

    return {
        siteUrl: config.SiteURL,
        votedAnswers: votedAnswers(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            voteAnswer,
        }, dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);
