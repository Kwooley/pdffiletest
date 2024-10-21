(function() {
    // Function to highlight stricken or underlined text
    function highlightAnnotations() {
        var annots = this.getAnnots();
        if (annots) {
            for (var i = 0; i < annots.length; i++) {
                var annot = annots[i];
                if (annot.type === "StrikeOut" || annot.type === "Underline") {
                    var highlight = this.addAnnot({
                        type: "Highlight",
                        page: annot.page,
                        quads: annot.quads,
                        author: "Automated Script"
                    });
                    highlight.fillColor = color.yellow;
                }
            }
        }
    }

    // Execute the function
    highlightAnnotations.call(this);
})();
