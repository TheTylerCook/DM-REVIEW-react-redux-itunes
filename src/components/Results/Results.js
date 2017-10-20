import React from 'react';
import ResultRow from './ResultRow';
import {connect} from 'react-redux';



const Results = (props) => {

    const resultsArr = props.results ? 
        props.results.map((c, i) => {
        return (
            <ResultRow key={i}
                    preview={c.previewUrl}
                    song={c.trackName}
                    artist={c.artistName}
                    collection={c.collectionName}
                    albumArt={c.artworkUrl60}
                    type={c.kind}
                    singlePrice={c.trackPrice}
                    collectionPrice={c.collectionPrice }
                />
        )
        }) : null;

    return (
        <div className="results-container">
            <table>
                <tbody>
                    <tr>
                        <th>Play</th>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Collection</th>
                        <th>Album Art</th>
                        <th>Type</th>
                        <th>Single Price</th>
                        <th>Collection Price</th>
                    </tr>
                    {resultsArr}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Results);